const path = require('path');

const BASE_URL = path.normalize(process.env.BASE_URL || '')  // #58/GITHUB#18
  .replace(/^(\/|\s)+/, '')
  .replace(/(\/|\s)+$/, '')
  .concat('/');
const VUE_APP_BOARD_DELETION_ENABLED = !!parseInt(process.env.VUE_APP_BOARD_DELETION_ENABLED);
const VUE_APP_CHECKED_ITEMS_HISTORY_SORT_FIELD = process.env.VUE_APP_CHECKED_ITEMS_HISTORY_SORT_FIELD || 'lastCheckedAt';
const VUE_APP_CHECKED_ITEMS_HISTORY_SORT_ORDER = process.env.VUE_APP_CHECKED_ITEMS_HISTORY_SORT_ORDER || 'desc';
const VUE_APP_CLIENT_LOG_CONSOLE_ENABLED = !!parseInt(process.env.VUE_APP_CLIENT_LOG_CONSOLE_ENABLED);
const VUE_APP_CLIENT_LOG_ENABLED = !!parseInt(process.env.VUE_APP_CLIENT_LOG_ENABLED);
const VUE_APP_CLIENT_LOG_LEVEL = process.env.VUE_APP_CLIENT_LOG_LEVEL || 'debug';
const VUE_APP_DISABLE_AGRESSIVE_ASSETS_CACHING = !!parseInt(process.env.VUE_APP_DISABLE_AGRESSIVE_ASSETS_CACHING);
const VUE_APP_DISABLE_CONTEXTMENU = !!parseInt(process.env.VUE_APP_DISABLE_CONTEXTMENU);
const VUE_APP_EDIT_ITEM_ON_CREATE = !!parseInt(process.env.VUE_APP_EDIT_ITEM_ON_CREATE);
const VUE_APP_I18N_FALLBACK_LOCALE = process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en';
const VUE_APP_I18N_FORCE_LOCALE = !!parseInt(process.env.VUE_APP_I18N_FORCE_LOCALE);
const VUE_APP_I18N_LOCALE = process.env.VUE_APP_I18N_LOCALE || 'en';
const VUE_APP_LIST_ALL_BOARDS_ENABLED = !!parseInt(process.env.VUE_APP_LIST_ALL_BOARDS_ENABLED);
const VUE_APP_LOCALSTORAGE_KEY_PREFIX = process.env.VUE_APP_LOCALSTORAGE_KEY_PREFIX || 'OurShoppingList_';
const VUE_APP_SHORT_TITLE = process.env.VUE_APP_SHORT_TITLE || 'OSL';
const VUE_APP_SINGLEBOARD_ID = process.env.VUE_APP_SINGLEBOARD_ID || '00000000-0000-0000-0000-000000000000';
const VUE_APP_SINGLEBOARD_MODE = !!parseInt(process.env.VUE_APP_SINGLEBOARD_MODE);
const VUE_APP_SINGLEBOARD_SLUG = process.env.VUE_APP_SINGLEBOARD_SLUG || '_';
const VUE_APP_TITLE = process.env.VUE_APP_TITLE || 'Our Shopping List';
const VUE_APP_USE_ITEM_QUICK_SYNTAX = !!parseInt(process.env.VUE_APP_USE_ITEM_QUICK_SYNTAX);

module.exports = {
  BASE_URL,
  VUE_APP_BOARD_DELETION_ENABLED,
  VUE_APP_CHECKED_ITEMS_HISTORY_SORT_FIELD,
  VUE_APP_CHECKED_ITEMS_HISTORY_SORT_ORDER,
  VUE_APP_CLIENT_LOG_CONSOLE_ENABLED,
  VUE_APP_CLIENT_LOG_ENABLED,
  VUE_APP_CLIENT_LOG_LEVEL,
  VUE_APP_DISABLE_AGRESSIVE_ASSETS_CACHING,
  VUE_APP_DISABLE_CONTEXTMENU,
  VUE_APP_EDIT_ITEM_ON_CREATE,
  VUE_APP_I18N_FALLBACK_LOCALE,
  VUE_APP_I18N_FORCE_LOCALE,
  VUE_APP_I18N_LOCALE,
  VUE_APP_LIST_ALL_BOARDS_ENABLED,
  VUE_APP_LOCALSTORAGE_KEY_PREFIX,
  VUE_APP_SHORT_TITLE,
  VUE_APP_SINGLEBOARD_ID,
  VUE_APP_SINGLEBOARD_MODE,
  VUE_APP_SINGLEBOARD_SLUG,
  VUE_APP_TITLE,
  VUE_APP_USE_ITEM_QUICK_SYNTAX,
};
