import React from 'react'
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import s from "./qrCodeGenerator.module.css"

export default function QrCodeGenerator() {
  const [value, setValue] = useState('Hello');
  const [result, setResult] = useState(false);

  const onClickHandler = (event) => {

    setResult(value);
    setValue('')
  };
  const onChangeHandler = (event) => {
    setValue(event.target.value)
    setResult()
  };



  return (

    <div className={s.container}>
      <input type="text" placeholder='Введите текст' value={value} onChange={onChangeHandler} className={s.input} />
      <button className={s.button} type='button' onClick={onClickHandler}>Сгенерировать Qr-code</button>
      {result !== ''
        && (
          <div className={s.qrWrapper}>
            <QRCodeSVG value={value} size={200} />
          </div>

        )}
    </div>
  )
}
