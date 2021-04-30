import configConventional from '@commitlint/config-conventional';
import { UserConfig } from '@commitlint/types';

const configConventionalTypeEnum = configConventional.rules['type-enum'];

const NIMOTEC_TYPES: string[] = [
  'css', // CSS Changes
  'infra', // Infra config changes
  'wip', // Work In Progress
];

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [...configConventionalTypeEnum[2], ...NIMOTEC_TYPES]],
  },
};

module.exports = Configuration;
