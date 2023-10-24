import jspreadsheet from "jspreadsheet-ce";
import { useEffect, useRef, useState } from "react"

interface SpreadSheetProps {
    data: any,
    columns: any
}

export default function SpreadSheet({ data, columns }: SpreadSheetProps) {
    const spreadSheetRef = useRef<any>(null)
    const spreadSheetRefTest = useRef<any>(null)

    const getData = () => spreadSheetRefTest.current.getData()

    useEffect(() => {
        const link = document.createElement('link')
        link.href = 'https://bossanova.uk/jspreadsheet/v4/jexcel.css'
        link.rel = 'stylesheet'
        link.type = 'text/css'
        document.head.appendChild(link)
        return () => {
            document.head.removeChild(link)
        }
    }, [])

    useEffect(() => {
        const link = document.createElement('link')
        link.href = 'https://jsuites.net/v4/jsuites.css'
        link.rel = 'stylesheet'
        link.type = 'text/css'
        document.head.appendChild(link)
        return () => {
            document.head.removeChild(link)
        }
    }, [])

    useEffect(() => {
        const link = document.createElement('link')
        link.href = 'https://bossanova.uk/jspreadsheet/v4/jexcel.datatables.css'
        link.rel = 'stylesheet'
        link.type = 'text/css'
        document.head.appendChild(link)
        return () => {
            document.head.removeChild(link)
        }
    }, [])

    // init spreadsheet
    useEffect(() => {
        spreadSheetRefTest.current = jspreadsheet(spreadSheetRef.current, {
            // Entry data
            data,
            columns,

            // Settings
            defaultColWidth: 150,
            defaultRowHeight: 50,
            tableOverflow: true,
            tableWidth: "1024px",
            tableHeight: "75vh",
            allowComments: true,

            // Actions
            search: true,
            pagination: 100,
        })

        return () => {
            spreadSheetRefTest.current.destroy()
        }
    }, [data])

    // filters maybe ?

    return (
        <div ref={spreadSheetRef}></div>
    )
}