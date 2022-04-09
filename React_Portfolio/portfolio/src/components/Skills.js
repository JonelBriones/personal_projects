import Table from 'react-bootstrap/Table';

const Skills = (props) => {
    return (
        <div className="skills">
        <Table striped bordered hover variant="dark" >
            <thead>
                <tr>
                    <th>Languages</th>
                    <th>Front-End</th>
                    <th>Back-End</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>HTML & CSS</td>
                    <td>Python</td>
                    <td>Node.js</td>
                </tr>
                <tr>
                    <td>JavaScript</td>
                    <td>JavaScript</td>
                    <td>Express</td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}
export default Skills;