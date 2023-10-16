export let COLUMNS = (resp_data) => {
    const DATA_COLUMNS = [
    {
    Header: "Index",
    accessor: "index"
    },
    {
    Header: "Campaign",
    accessor: "Campaign Name"
    }
    ];

    const transformedData = resp_data[0];

    for (const key in transformedData) {
    if (key === "index" || key === "Campaign Name") continue;
    const outerColumn = {
    Header: key,
    columns: []
    };

    for (const innerKey in transformedData[key]) {
    const innerColumn = {
        Header: innerKey,
        columns: []
    };

    for (const subKey in transformedData[key][innerKey]) {
        const subColumn = {
        Header: subKey,
        accessor: `${key}.${innerKey}.${subKey}`
        };
        innerColumn.columns.push(subColumn);
    }

    outerColumn.columns.push(innerColumn);
    }

    DATA_COLUMNS.push(outerColumn);
    }
    return DATA_COLUMNS
}