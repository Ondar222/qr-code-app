import React from 'react'
import { Link } from "react-router-dom";
import s from "./navigation.module.css"

export default function Navigation() {
    return (
        <nav className={s.container}>
            <Link to="/generate">Генерировать QR-Code</Link>
            <Link to="/scan">Сканировать QR-Code</Link>
            <Link to="/">История генерирования</Link>
            <Link to="/">История сканирования</Link>
        </nav>
    )
}
