import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../contexts/ProgressContext';
import { useSizeRatio } from '../../contexts/SizeRatioContext';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import { Button } from './button';
import { RulesModal } from './rules-modal';
import { CommonText } from './text';

const CELLS_COLUMN_AMOUNT = 4;
const CELLS_ROW_AMOUNT = 4;
const SKIP_AMOUNT = 10;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    background: url(${({$bg}) => $bg}) no-repeat 0 0 / cover;
`;

const CellsWrapper = styled.div`
  position: relative;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(${CELLS_ROW_AMOUNT}, 1fr);
  grid-template-columns: repeat(${CELLS_COLUMN_AMOUNT}, 1fr);
  width: ${({$ratio}) => $ratio * 343}px;
  overflow: hidden;
  border-radius: ${({$ratio}) => $ratio * 15}px;
  border: 1px solid #ffffff;
`;

const Cell = styled.div`
  position: relative;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({$ratio}) => $ratio * 10}px;
  white-space: pre-line;

  ${({$styles}) => $styles};

  &:nth-child(1),&:nth-child(2),&:nth-child(3),&:nth-child(4) {
    border-top: none;
  }
  &:nth-child(1),&:nth-child(5),&:nth-child(9),&:nth-child(13) {
    border-left: none;
  }
  &:nth-child(4),&:nth-child(8),&:nth-child(12),&:nth-child(16) {
    border-right: none;
  }
  &:nth-child(13),&:nth-child(14),&:nth-child(15),&:nth-child(16) {
    border-bottom: none;
  }

  & span {
    font-weight: 600;
  }
`;

const CellNumber = styled(CommonText)`
  position: absolute;
  top: 2px;
  left: ${({$ratio}) => $ratio * 6}px;
  font-size: ${({$ratio}) => $ratio * 14}px;
  font-weight: 600;
`;

const ButtonsBlock = styled.div`
    position: absolute;
    top: ${({$ratio}) => $ratio * 16}px;
    left: ${({$ratio}) => $ratio * 16}px;
    right: ${({$ratio}) => $ratio * 16}px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;

    & p {
        font-weight: 500;
        font-size: ${({$ratio}) => $ratio * 22}px;
    }
`;

const ActionButton = styled(Button)`
    background: #FF901D;
    width: ${({$ratio}) => $ratio * 48}px;
    height: ${({$ratio}) => $ratio * 36}px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;

    & svg {
        width: ${({$ratio}) => $ratio * 24}px;
        height: ${({$ratio}) => $ratio * 24}px;
    }
`;

const SkipBtn = styled.button`
    position: absolute;
    bottom: ${({$ratio}) => $ratio * 60}px;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    outline: none;
    transition: opacity 0.3s;
    opacity: ${({$canSkip}) => $canSkip ? 1 : 0};
    color: #FFFFFF;
    padding: 0 ${({$ratio}) => $ratio * 4}px ${({$ratio}) => $ratio * 4}px;
    border-bottom: 2px solid #FFFFFF;
    background: transparent;
    font-size: ${({$ratio}) => $ratio * 20}px;
    font-weight: 700;
    cursor: pointer;
    font-family: 'Verdana', 'sans-serif';
`;

const getRowId = (i) => Math.floor(i / CELLS_ROW_AMOUNT);
const getColId = (i) => i % CELLS_ROW_AMOUNT;

const fillCellArray = (id, cellSize, isEmpty, bg) => (
    {
        id: `cell_${id}`,
        position: id,
        isEmpty,
        styles: {
            width: cellSize,
            height: cellSize,
            ...(isEmpty ? {background: 'rgba(0,54,72,0.5)'} : {
                background: `url(${bg}) no-repeat`,
                'background-size': `${cellSize * CELLS_COLUMN_AMOUNT}px ${cellSize * CELLS_ROW_AMOUNT}px`,
                'background-position': `-${getColId(id) * cellSize}px -${getRowId(id) * cellSize}px`
            })
        }
    }
);

export const Game = ({ isFirstTimeRules, picture, bg, phrases, level, initialPuzzles }) => {
    const {next} = useProgress();
    const ratio = useSizeRatio();
    const [shownCells, setShownCells] = useState([]);
    const [initialCells, setInitialCells] = useState([]);
    const [finished, setFinished] = useState(false);
    const [canSkip, setCanSkip] = useState(false);
    const [rulesModal, setRulesModal] = useState({shown: isFirstTimeRules, isFirstTime: isFirstTimeRules});

    useEffect(() => {
        const size = 343 * ratio / CELLS_ROW_AMOUNT;
        const cellsAmount = CELLS_ROW_AMOUNT * CELLS_COLUMN_AMOUNT;
        const initial = initialPuzzles.map((id) => fillCellArray(id, size, id === cellsAmount - 1, picture));
        setShownCells(() => initial);
        setInitialCells(() => initial);
    }, [ratio, picture, initialPuzzles]);

    const swapCells = (ind1, ind2, arr) => {
        const newArr = [...arr];
        const t = newArr[ind1];
        newArr[ind1] = newArr[ind2];
        newArr[ind2] = t;
        return newArr;
    };

    const handleRestart = () => {
        setShownCells(initialCells);
    }

    const onMoveCell = useCallback((ind) => {
        if (shownCells[ind].isEmpty || finished) return;
        let emptyId = '';
        if (ind > 0 && shownCells[ind - 1]?.isEmpty) emptyId = ind - 1;
        else if (ind > 3 && shownCells[ind - CELLS_ROW_AMOUNT]?.isEmpty) emptyId = ind - CELLS_ROW_AMOUNT;
        else if (shownCells[ind + 1]?.isEmpty) emptyId = ind + 1;
        else if (shownCells[ind + CELLS_ROW_AMOUNT]?.isEmpty) emptyId = ind + CELLS_ROW_AMOUNT;
        if (typeof emptyId === 'number') {
            const swappedArr = swapCells(ind, emptyId, shownCells);
            setShownCells(() => swappedArr);
            let i;
            for (i = 0; i < swappedArr.length; i++) {
                if (i !== swappedArr[i].position) break;
            }

            if (i >= SKIP_AMOUNT) {
                setCanSkip(true);
            }

            if (i === initialCells.length) {
                setFinished(true);
                setTimeout(() => next(), 300);
            }
        }
    }, [shownCells, setFinished, setShownCells, finished, next, initialCells]);

    const handleCloseRules = () => {
        if (rulesModal.isFirstTime) reachMetrikaGoal('rules');

        setRulesModal({shown: false, isFirstTime: false});
    }
    return (
        <>
            <Wrapper $bg={bg}>
                <ButtonsBlock $ratio={ratio}>
                    <ActionButton $ratio={ratio} onClick={() => setRulesModal({shown: true, isFirstTime: false})}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75ZM12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="white"/>
                        </svg>
                    </ActionButton>
                    <p>Уровень {level}/5</p>
                    <ActionButton $ratio={ratio} onClick={handleRestart}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.9346 5.59158C16.217 5.70662 16.4017 5.98121 16.4017 6.28616V9.00067C16.4017 9.41489 16.0659 9.75067 15.6517 9.75067H13C12.6983 9.75067 12.4259 9.56984 12.3088 9.29174C12.1917 9.01364 12.2527 8.69245 12.4635 8.47659L13.225 7.69705C11.7795 7.25143 10.1467 7.61303 9.00097 8.78596C7.33301 10.4935 7.33301 13.269 9.00097 14.9765C10.6593 16.6742 13.3407 16.6742 14.999 14.9765C15.6769 14.2826 16.0805 13.4112 16.2069 12.5045C16.2651 12.0865 16.5972 11.7349 17.0192 11.7349C17.4246 11.7349 17.7609 12.0595 17.7217 12.463C17.5957 13.7606 17.0471 15.0265 16.072 16.0247C13.8252 18.3248 10.1748 18.3248 7.92796 16.0247C5.69068 13.7344 5.69068 10.0281 7.92796 7.7378C9.66551 5.95905 12.244 5.55465 14.3647 6.53037L15.1152 5.76208C15.3283 5.54393 15.6522 5.47653 15.9346 5.59158Z" fill="white"/>
                        </svg>
                    </ActionButton>
                </ButtonsBlock>
                <CellsWrapper $ratio={ratio}>
                    {shownCells.map((cell, i) => (
                        <Cell key={cell.id} $styles={cell.styles} $ratio={ratio} onClick={() => onMoveCell(i)}>
                            {!cell.isEmpty && <CellNumber  $ratio={ratio}>{cell.position + 1}</CellNumber>}
                            {cell.isEmpty && phrases?.[i]?.length > 0 && <span>{phrases[i]}</span>}
                        </Cell>
                    ))}
                </CellsWrapper>
                <SkipBtn $canSkip={canSkip} onClick={next} $ratio={ratio}>Пропустить</SkipBtn>
            </Wrapper>
            {
                rulesModal.shown && (
                    <RulesModal
                        onClose={handleCloseRules}
                        isFirstTime={rulesModal.isFirstTime}
                    />
                )
            }
        </>
    );
};