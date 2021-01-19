import React from 'react';
import { Link as BaseLink } from 'gatsby';

const Link = ({ to, ...props }) => (
  <BaseLink to={`${to}/`.replace(/\/+$/, '/')} {...props} />
);

export default Link;