"use client";

import { useReducer } from "react";
import { Stage } from "@/(bottomTab)/mypage/reset-password/_type/stage";
import KeypadBoard from "@/(bottomTab)/mypage/reset-password/_component/keypad-board/KeypadBoard";

const initialStage: Stage = Stage.PASSWORD;

type StageAction =
  | { type: 'prev' }
  | { type: 'next' }

function stageReducer(stage: Stage, action: StageAction): Stage {
  switch (action.type) {
    case 'prev':
      return stage - 1;
    case 'next':
      return stage + 1;
    default:
      throw new Error('Unhandled action');
  }
}

export default function RePasswordPage() {
  const [stage, dispatch] = useReducer(stageReducer, initialStage);
  const prevStage = () => dispatch({ type: 'prev' });
  const nextStage = () => dispatch({ type: 'next' });

  return (
    <KeypadBoard
      stage={stage}
      prevStage={prevStage}
      nextStage={nextStage}
    />
  );
}
