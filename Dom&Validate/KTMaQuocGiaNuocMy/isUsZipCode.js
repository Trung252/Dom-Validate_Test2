function is_usZipCode(str) {
    regexp = /^[0-9]{5} (?:- [0-9]{4})?$/; //phai co dấu cách vi trong phep tinh đề bài có dấu cách
    if (regexp.test(str)) {
        return true;
    } 
    return false;
}