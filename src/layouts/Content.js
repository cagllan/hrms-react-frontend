import React from 'react'
import CorporationList from '../pages/CorporationList'
import EmployeeList from '../pages/EmployeeList'
import JobPositionList from '../pages/JobPositionList'
import JobSeekerList from '../pages/JobSeekerList'

export default function Content() {
    return (
        <div>
            <JobPositionList/>
            <JobSeekerList/>
            <CorporationList/>
            <EmployeeList/>
        </div>
    )
}
