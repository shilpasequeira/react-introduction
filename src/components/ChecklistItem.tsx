import React from 'react';
import { Checkbox } from 'antd';

interface ChecklistItemProps {
  checked: boolean,
  onChange: (checked: boolean) => void;
}

const ChecklistItem: React.FunctionComponent<ChecklistItemProps> = ({checked, onChange, children}) => {
  return <Checkbox checked={checked} onChange={(e) => onChange(e.target.checked)}>{children}</Checkbox>
}

export default ChecklistItem;