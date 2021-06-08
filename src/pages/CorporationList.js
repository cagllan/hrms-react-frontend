import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import CorporationService from '../services/corporationService';

export default function CorporationList() {
    const [corporations, setCorporations] = useState([]);

    useEffect(()=>{
        let corporationService = new CorporationService()
  
        corporationService.getCorporations().then(result=>setCorporations(result.data.data))
    },[])
  
    return (
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>şirket adı</Table.HeaderCell>
              <Table.HeaderCell>şirket website</Table.HeaderCell>
              <Table.HeaderCell>telefon</Table.HeaderCell>
              <Table.HeaderCell>email</Table.HeaderCell>
              <Table.HeaderCell>password</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
  
          <Table.Body>
            {corporations.map((corporations) => (
              <Table.Row key={corporations.corporationId}>
                <Table.Cell>{corporations.corporationName}</Table.Cell>
                <Table.Cell>{corporations.website}</Table.Cell>
                <Table.Cell>{corporations.phoneNumber}</Table.Cell>
                <Table.Cell>{corporations.user.email}</Table.Cell>
                <Table.Cell>{corporations.user.password}</Table.Cell>
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
