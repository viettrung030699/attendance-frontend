import React, { Component } from 'react'

export default class AdminSession extends Component {
    render() {
        return (
            <div style={{textAlign:'left'}}>
                <h4>This page includes:</h4>
                <ul>
                    <li>Button to create sessions</li>
                    <li>Current table of sessions with columns:
                        <ul>
                            <li>Course name (SPM, OOAD, Web)</li>
                            <li>Week (Week 1, 2, 3...)</li>
                            <li>Status (w/ or wo/ quiz)</li>
                            <li>Action buttons (Review, Edit, Delete)</li>
                        </ul>
                    </li>
                    <li>Filter for Status</li>
                    <li>Pagination (up to 5 sessions per page)</li>
                </ul>
            </div>
        )
    }
}
