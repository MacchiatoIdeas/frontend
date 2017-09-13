import {schema} from 'normalizr';

export const author = new schema.Entity('authors');

export const content = new schema.Entity('contents', {
  author
});

export const unit = new schema.Entity('units', {
  contents: [content]
});

export const field = new schema.Entity('fields', {
  units: [unit]
});

content.define({ unit });
unit.define({ field });

export const fieldArray = [field];
