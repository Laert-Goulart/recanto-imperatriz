'use client';

import { ImageUploadField } from './ImageUploadField';
import { colors } from '@/content/config';

type JsonValue = string | number | boolean | JsonValue[] | { [key: string]: JsonValue } | null;

function prettifyKey(key: string): string {
  const withSpaces = key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ');
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

function isImageKey(key: string): boolean {
  const k = key.toLowerCase();
  return k === 'src' || k.includes('image') || k.includes('foto') || k.includes('cover') || k.includes('mapa');
}

function blankLike(value: JsonValue): JsonValue {
  if (typeof value === 'string') return '';
  if (typeof value === 'number') return 0;
  if (typeof value === 'boolean') return false;
  if (Array.isArray(value)) return [];
  if (value && typeof value === 'object') {
    const result: { [key: string]: JsonValue } = {};
    for (const k of Object.keys(value)) {
      result[k] = blankLike(value[k]);
    }
    return result;
  }
  return '';
}

export function GenericJsonEditor({
  value,
  onChange,
  fieldKey,
  depth = 0,
}: {
  value: JsonValue;
  onChange: (newValue: JsonValue) => void;
  fieldKey?: string;
  depth?: number;
}) {
  // STRING
  if (typeof value === 'string') {
    if (fieldKey && isImageKey(fieldKey)) {
      return (
        <ImageUploadField
          value={value}
          onChange={(url) => onChange(url)}
          label={fieldKey ? prettifyKey(fieldKey) : undefined}
        />
      );
    }

    const isLong = value.length > 70;

    return (
      <div style={{ marginBottom: '10px' }}>
        {fieldKey && (
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>
            {prettifyKey(fieldKey)}
          </label>
        )}
        {isLong ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={3}
            style={{
              width: '100%',
              padding: '8px 10px',
              fontSize: '14px',
              border: `1px solid ${colors.divider}`,
              borderRadius: '4px',
              fontFamily: 'inherit',
              resize: 'vertical',
            }}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 10px',
              fontSize: '14px',
              border: `1px solid ${colors.divider}`,
              borderRadius: '4px',
            }}
          />
        )}
      </div>
    );
  }

  // NUMBER
  if (typeof value === 'number') {
    return (
      <div style={{ marginBottom: '10px' }}>
        {fieldKey && (
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px' }}>
            {prettifyKey(fieldKey)}
          </label>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          style={{
            width: '100%',
            padding: '8px 10px',
            fontSize: '14px',
            border: `1px solid ${colors.divider}`,
            borderRadius: '4px',
          }}
        />
      </div>
    );
  }

  // BOOLEAN
  if (typeof value === 'boolean') {
    return (
      <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <input type="checkbox" checked={value} onChange={(e) => onChange(e.target.checked)} />
        {fieldKey && <label style={{ fontSize: '13px' }}>{prettifyKey(fieldKey)}</label>}
      </div>
    );
  }

  // ARRAY
  if (Array.isArray(value)) {
    return (
      <div style={{ marginBottom: '12px' }}>
        {fieldKey && (
          <p style={{ fontSize: '13px', fontWeight: 700, margin: '0 0 8px', color: colors.accent }}>
            {prettifyKey(fieldKey)} ({value.length})
          </p>
        )}
        {value.map((item, i) => (
          <div
            key={i}
            style={{
              border: `1px solid ${colors.divider}`,
              borderRadius: '6px',
              padding: '14px',
              marginBottom: '10px',
              background: depth % 2 === 0 ? '#fafafa' : '#fff',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, opacity: 0.6 }}>Item {i + 1}</span>
              <button
                type="button"
                onClick={() => {
                  const newArr = value.filter((_, idx) => idx !== i);
                  onChange(newArr);
                }}
                style={{
                  fontSize: '12px',
                  color: '#c0392b',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '2px 6px',
                }}
              >
                Remover
              </button>
            </div>
            <GenericJsonEditor
              value={item}
              depth={depth + 1}
              onChange={(newItem) => {
                const newArr = [...value];
                newArr[i] = newItem;
                onChange(newArr);
              }}
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => {
            const template = value.length > 0 ? blankLike(value[0]) : '';
            onChange([...value, template]);
          }}
          style={{
            fontSize: '13px',
            padding: '8px 14px',
            background: colors.surface,
            border: `1px dashed ${colors.accent}`,
            borderRadius: '4px',
            cursor: 'pointer',
            color: colors.accent,
            fontWeight: 500,
          }}
        >
          + Adicionar item
        </button>
      </div>
    );
  }

  // OBJECT
  if (value && typeof value === 'object') {
    return (
      <div style={{ marginBottom: depth === 0 ? '0' : '4px' }}>
        {Object.keys(value).map((key) => (
          <div key={key} style={{ marginBottom: '4px' }}>
            <GenericJsonEditor
              value={value[key]}
              fieldKey={key}
              depth={depth + 1}
              onChange={(newVal) => {
                onChange({ ...value, [key]: newVal });
              }}
            />
          </div>
        ))}
      </div>
    );
  }

  return null;
}
