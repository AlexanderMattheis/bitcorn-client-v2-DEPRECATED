import Symbols from "../symbols";

export default class CsvConverter {
    public matrixToCSV(matrixName: string, verticalHeader: string,
                       horizontalHeader: string, matrix: number[][]): string {
        let csvString: string = matrixName + Symbols.CSV_SEPERATOR + Symbols.SPACE + Symbols.CSV_SEPERATOR
            + horizontalHeader.split(Symbols.EMPTY).join(Symbols.CSV_SEPERATOR) + Symbols.NEW_LINE;

        for (let i: number = 0; i < matrix.length; i++) {
            for (let j: number = 0; j < matrix[0].length; j++) {
                if (i > 0) {
                    csvString +=
                        (j === 0 ? verticalHeader[i-1] : Symbols.EMPTY) + Symbols.CSV_SEPERATOR + matrix[i][j];
                } else {
                    csvString +=
                        (j === 0 ? Symbols.SPACE : Symbols.EMPTY) + Symbols.CSV_SEPERATOR + matrix[i][j];
                }
            }

            // @see: CSV specification: https://www.ietf.org/rfc/rfc4180.txt
            // a line break in the last line is allowed and necessary for many programs
            csvString += Symbols.NEW_LINE;
        }

        return csvString;
    }
}