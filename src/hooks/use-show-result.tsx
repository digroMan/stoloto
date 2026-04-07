import { useCallback, useState } from 'react';
import { comparingArrays } from '../utils/helpers';
import { FIRST_RANDOM_ARR, SECOND_RANDOM_ARR } from '../utils/constants';

type TUseShowResultResult = {
  showResult: () => boolean;
  showPrize: boolean;
  losingGame: boolean;
};

type TUseShowResultProps = {
  selectFirstField: number[];
  selectSecondField: number[];
  activateButton: boolean;
};

export const useShowResult = ({
  selectFirstField,
  selectSecondField,
  activateButton,
}: TUseShowResultProps): TUseShowResultResult => {
  const [showPrize, setShowPrize] = useState(false);
  const [losingGame, setLosingGame] = useState(false);

  const showResult = useCallback(() => {
    if (!activateButton) return false;

    const resultFirstField = comparingArrays(selectFirstField, FIRST_RANDOM_ARR);
    const resultSecondField = comparingArrays(selectSecondField, SECOND_RANDOM_ARR);

    if (resultFirstField.size <= 12) {
      setShowPrize(true);
      return true;
    }

    if (resultFirstField.size === 13 && resultSecondField.size === 1) {
      setShowPrize(true);
      return true;
    }

    setLosingGame(true);

    return true;
  }, [activateButton, selectFirstField, selectSecondField]);

  return {
    showResult,
    showPrize,
    losingGame,
  };
};
