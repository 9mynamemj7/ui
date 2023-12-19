import React, { useState } from "react";

// + 명시적인 타입 선언
import { FC } from "react";

/**
 * @props 없음
 * @description  타입 에러로 보이므로 1차 수정
 * @description `import MyTestComponent from "minjuong-ui/components"`
 */
const MyTestComponent: FC = () => {
    const [num, setNum] = useState(0);
    const clickEvent = () => {
        setNum(num + 1);
    };
    return (
        <div>
            <h2>click event</h2>
            <button onClick={() => clickEvent()}>{num}</button>
        </div>
    );
};

export default MyTestComponent;
