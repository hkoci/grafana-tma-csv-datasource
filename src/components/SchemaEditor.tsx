import React, { useState, useEffect } from 'react';

import { FieldSchema } from '../types';
import {} from '@emotion/core';
import { CSVQueryField } from './CSVQueryField';
import { Icon, InlineFieldRow } from '@grafana/ui';

interface Props {
  value: FieldSchema[];
  onChange: (value: FieldSchema[]) => void;
}

export const SchemaEditor = ({ value, onChange }: Props) => {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const onFieldChange = (idx: number) => (fieldSchema: FieldSchema) => {
    const res = internalValue.map((field, i) => (i === idx ? fieldSchema : field));
    setInternalValue(res);
    onChange(res);
  };
  const onAppendField = () => {
    const res = [...internalValue, { name: '', type: 'string' }];
    setInternalValue(res);
    onChange(res);
  };
  const onAddField = (idx: number) => {
    const res = [...internalValue.slice(0, idx + 1), { name: '', type: 'string' }, ...internalValue.slice(idx + 1)];
    setInternalValue(res);
    onChange(res);
  };
  const onRemoveField = (idx: number) => {
    const res = internalValue.filter((_, i) => i !== idx);
    setInternalValue(res);
    onChange(res);
  };

  if (!internalValue.length) {
    onAppendField();
  }

  return (
    <>
      {internalValue.map((_, i) => (
        <InlineFieldRow key={i}>
          <CSVQueryField field={_} onFieldChange={onFieldChange(i)} />

          <a className="gf-form-label">
            <Icon name="plus" size="lg" onClick={() => onAddField(i)} />
          </a>
          {internalValue.length > 1 && (
            <a className="gf-form-label">
              <Icon name="minus" size="lg" onClick={() => onRemoveField(i)} />
            </a>
          )}
        </InlineFieldRow>
      ))}
    </>
  );
};