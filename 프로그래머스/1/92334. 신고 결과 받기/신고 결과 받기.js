function solution(id_list, report, k) {
    const setReport = [...new Set(report)]
    const reportIdObject = setReportCount(setReport)
    
    const deleteId = []
    Object.entries(reportIdObject).forEach(([key, value]) => {
        if(value >= k) {
            return deleteId.push(key)
        }
    })
    
    const idObject = {}
    id_list.forEach(item => {
        idObject[item] = 0
    })
    setReport.forEach(item => {
        const [id, reportId] = item.split(' ')
        if(deleteId.includes(reportId)) {
            idObject[id] = idObject[id] + 1
        }  
    })
    return Object.values(idObject)
}

const setReportCount = (setReport) => {
    const reportIdObject = {}
    
    setReport.forEach((item) => {
        const [id, reportId] = item.split(' ')
        reportIdObject[reportId] = (reportIdObject[reportId] || 0) + 1
    })
    return reportIdObject
}