/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Text } from 'react-native';
import { fonts } from '../../styles';

export default {
  LargeTitle: props => (
    <Text {...props} style={[fonts.largeTitle, { color: props.color }]}>
      {props.children}
    </Text>
  ),
  Title: props => (
    <Text {...props} style={[fonts.title, { color: props.color }]}>
      {props.children}
    </Text>
  ),
  SubTitle: props => (
    <Text {...props} style={[fonts.subTitle, { color: props.color }]}>
      {props.children}
    </Text>
  ),
  HeadLine: props => (
    <Text {...props} style={[fonts.headLine, { color: props.color }]}>
      {props.children}
    </Text>
  ),
  Body: props => (
    <Text {...props} style={[fonts.body, { color: props.color }]}>
      {props.children}
    </Text>
  ),
  BodyLarge: props => (
    <Text {...props} style={[fonts.bodyLarge, { color: props.color }]}>
      {props.children}
    </Text>
  ),
  Caption: props => (
    <Text {...props} style={[fonts.caption, { color: props.color }]}>
      {props.children}
    </Text>
  ),
  Overline: props => (
    <Text {...props} style={[fonts.overline, { color: props.color }]}>
      {props.children}
    </Text>
  ),
  Button: props => (
    <Text {...props} style={[fonts.button, { color: props.color }]}>
      {props.children}
    </Text>
  ),
};
