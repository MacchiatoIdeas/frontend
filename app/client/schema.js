import {schema} from 'normalizr';

export const field = new schema.Entity('fields');

export const unit = new schema.Entity('units', {
  field: field
}, {
  processStrategy: (value, parent, key) => ({
    ...value,
    field: key === 'units' ? parent.id : undefined,
  })
});

field.define({
  units: [unit]
});

export const fieldArray = [field];
