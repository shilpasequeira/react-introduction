import React from 'react';
import { useState } from 'react';
import { Space, Card } from 'antd';
import Checklist, { ChecklistProps } from './components/Checklist';

const defaultChecklistItems: ChecklistProps["items"] = [
  { text: 'Task 1', checked: false },
  { text: 'Task 2', checked: false },
]

function App() {
  const [checkListItems, setCheckListItems] = useState(defaultChecklistItems);
  const updateCheckListItem: ChecklistProps["onChange"] = (item, index) => {
    setCheckListItems(defaultChecklistItems.splice(index, 1, item))
  }

  return (
    <Checklist items={defaultChecklistItems} onChange={updateCheckListItem} />
  );
}

export default App;
