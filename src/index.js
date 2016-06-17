import angular from 'angular'
import { dtaDragModule } from './dtaDrag.module'
import { dtaDropModule } from './dtaDrop.module'

export const DtaDragDropModule =

angular.module('dtaDragDrop', [])

  .directive('dtaDrag', dtaDragModule)
  .directive('dtaDrop', dtaDropModule)

  .name
