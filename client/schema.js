import {schema} from 'normalizr';

export const author = new schema.Entity('authors');

export const content = new schema.Entity('contents', {
  author
});

export const exercise = new schema.Entity('exercises', {
  author,
});

export const unit = new schema.Entity('units', {
  contents: [content],
  exercises: [exercise],
});

export const subject = new schema.Entity('subjects', {
  units: [unit],
});

content.define({unit});
exercise.define({unit});
unit.define({subject});

export const subjectArray = [subject];
