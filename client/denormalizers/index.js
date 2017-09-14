export const subject = (subject, units) => {
  subject.units = subject.units.map(id => units[id]);
  return subject;
};
