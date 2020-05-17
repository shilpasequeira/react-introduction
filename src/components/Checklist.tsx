import React, { useState } from 'react';
import ChecklistItem from './ChecklistItem';

export interface ChecklistItemValue {
  text: string,
  checked: boolean
}

export interface ChecklistProps {
  items: ChecklistItemValue[];
  onChange: (item: ChecklistItemValue, index: number) => void
}

const Checklist: React.FunctionComponent<ChecklistProps> = ({items, onChange}) => {
  const renderItem: ChecklistProps["onChange"] = ({text, checked}, index) => <li>
    <ChecklistItem checked={checked} onChange={(checked) => onChange({text, checked}, index)}>{text}</ChecklistItem>
  </li>;

  return <ul>{items.map(renderItem)}</ul>;
}

export default Checklist;