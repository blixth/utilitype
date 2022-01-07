import { CsvData } from './csv-data';
import { isPresent } from '../any/is-present';

export class Csv {
  /*
  * Construct a Csv from the given array of objects.
  *
  * @Param {data} data           = The array of objects to use.
  * @Param {delimiter} delimiter = The delimiter to use for separating values.
  * @class
  */
  public static toString(data: CsvData, delimiter = ';'): string {
    const headers = Csv.buildHeaderRow(data);
    const rows = Csv.buildRows(data, headers, delimiter);

    return [this.join(headers, delimiter), ...rows].join('\n');
  }

  /*
  * Construct an object of type T from a csv string
  *
  * @Param {source} source           = The csv string
  * @Param {propertyMap} propertyMap = Maps properties to headers in the csv string
  * @Param {delimiter} delimiter     = The delimiter that is used for separating values.
  * @class
  */
  public static fromString<T extends Record<string, unknown>>(
    source: string,
    propertyMap: Array<{ header: string, key: keyof T }>,
    delimiter = ';',
  ): T[] {
    const newLine = /\r\n|\r|\n/;
    const rows = source.split(newLine);
    const [headerRow, ...dataRows] = rows;

    if (isPresent(headerRow)) {
      const headers = headerRow.split(delimiter);
      const indexedProperties = propertyMap.map((prop) => ({
        index: headers.indexOf(prop.header), ...prop,
      }));

      return dataRows.map((row) => {
        const values = row.split(delimiter);
        const target: Record<string, unknown> = {};

        indexedProperties.forEach((map) => {
          const { key, index } = map;
          target[key as string] = values[index];
        });

        return target as T;
      });
    }

    return [];
  }

  private static buildHeaderRow(data: CsvData): string[] {
    return data.reduce((acc: string[], entry) => {
      Object.entries(entry).forEach(([key]) => {
        if (acc.includes(key)) return;

        acc.push(key);
      });

      return acc;
    }, []);
  }

  private static buildRows(data: CsvData, headers: string[], delimiter: string) {
    return data.reduce((acc: string[], entry: any) => {
      const row = headers.map((key: string) => entry[key]);

      return [...acc, Csv.join(row, delimiter)];
    }, []);
  }

  private static join(row: string[], delimiter: string) {
    return row.join(delimiter);
  }
}
