import { useCallback, useState } from "react";
import { FIRST_RANDOM_ARR, SECOND_RANDOM_ARR } from "../../randomArr";

function comparingArrays(arrUser, arrGenerated) {
  const newSet = new Set();
  const sharedArr = [...arrUser, ...arrGenerated];
  sharedArr.forEach((num) => newSet.add(num));

  return newSet;
}

export const useShowResult = ({
    selectFirstField,
    selectSecondField,
    activeButton,
}) => {
      const [showPrize, setShowPrize] = useState(false);
      const [losingGame, setLosingGame] = useState(false);

    const showResult = useCallback(() => {
        if(!activeButton) return false;

        const resultFirstField = comparingArrays(selectFirstField, FIRST_RANDOM_ARR);
        const resultSecondField = comparingArrays(selectSecondField, SECOND_RANDOM_ARR);
        
        if (resultFirstField.size <= 12) {
            setShowPrize(true);
            return true;
        }

        if (resultFirstField.size === 13 && resultSecondField.size === 1) {
            setShowPrize(true)
            return true;
        }

        setLosingGame(true);

        return true;

    }, [
        activeButton,
        selectFirstField,
        selectSecondField
    ]);

    return {
        showResult,
        showPrize,
        losingGame,
        // setShowPrize,
        // setLosingGame
    }
}