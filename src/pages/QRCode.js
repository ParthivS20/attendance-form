import {useEffect, useState} from "react";
const QRCodeGen = require('qrcode');

export default function QRCode() {
    const [ip, setIP] = useState(null);
    useEffect(() => {
        if(!ip) return;
        let canvas = document.getElementById('qrcode')

        QRCodeGen.toCanvas(canvas, "http://" + ip, function (error) {
            if (error) console.error(error)
            console.log('success!');
        })
    }, [ip])

    useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setIP(data.ip));
    }, [])

    return <div>
        <canvas id="qrcode"/>
    </div>
}
