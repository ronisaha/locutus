function ctype_space (text) {
    // http://kevin.vanzonneveld.net
    // +   original by: Brett Zamir
    // -    depends on: setlocale
    // *     example 1: ctype_space('\t\n');
    // *     returns 1: true
    if (typeof text !== 'string') {
        return false;
    }
    // BEGIN STATIC
    setlocale('LC_ALL', 0); // ensure setup of localization variables takes place
    // END STATIC
    return this.php_js.locales[this.php_js.locale]['LC_CTYPE'].sp.test(text);
}