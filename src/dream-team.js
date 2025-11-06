const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  const team = [];
  for (const each of members)
    if (typeof each === 'string') {
      const withoutSpaces = each.trim();
      if (withoutSpaces.length > 0) team.push(withoutSpaces[0].toUpperCase());
    }
  return team.sort().join('');
}

module.exports = {
  createDreamTeam
};
