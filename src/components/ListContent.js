import React, { Component } from "react";
import styled from "styled-components";
import "@ui5/webcomponents/dist/List";
import "@ui5/webcomponents/dist/StandardListItem";

const people = [
  { name: "Lars" },
  { name: "Ivar" },
  { name: "Tone" },
  { name: "Karl" },
  { name: "Katrine" },
  { name: "Oda" },
  { name: "Vemund" },
  { name: "Kristian" },
  { name: "Kåre" },
  { name: "Bjarne" },
  { name: "Siri" },
  { name: "Silje" },
  { name: "Line" },
  { name: "Tom" },
  { name: "André" },
  { name: "Jim" },
  { name: "Øyvind" },
  { name: "Ole" }
];
export default () => (
  <ui5-list id="myList" class="full-width">
    {[...people, ...people, ...people].map(person => (
      <ui5-li icon="sap-icon://employee" type="Active" description="Employee">
        {person.name}
      </ui5-li>
    ))}
  </ui5-list>
);
