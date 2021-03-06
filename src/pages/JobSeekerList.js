import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(()=>{
      let jobSeekerService = new JobSeekerService()

      jobSeekerService.getJobSeekers().then(result=>setJobSeekers(result.data.data))
  },[])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ad</Table.HeaderCell>
            <Table.HeaderCell>Soyad</Table.HeaderCell>
            <Table.HeaderCell>Kimlik no</Table.HeaderCell>
            <Table.HeaderCell>dogum tarihi</Table.HeaderCell>
            <Table.HeaderCell>email</Table.HeaderCell>
            <Table.HeaderCell>password</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeekers) => (
            <Table.Row key={jobSeekers.jobSeekerId}>
              <Table.Cell>{jobSeekers.firstName}</Table.Cell>
              <Table.Cell>{jobSeekers.lastName}</Table.Cell>
              <Table.Cell>{jobSeekers.nationalityId}</Table.Cell>
              <Table.Cell>{jobSeekers.dateOfBirth}</Table.Cell>
              <Table.Cell>{jobSeekers.user.email}</Table.Cell>
              <Table.Cell>{jobSeekers.user.password}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
