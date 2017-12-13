import React, { Component } from 'react';

class Storage {
    save(keys, obj) {
        for(const key of keys) {
            localStorage.setItem(key, JSON.stringify(obj[key]))
        }
    };

    get(key) {
        let obj = {};
        obj[key] = localStorage.getItem(key);
        return obj[key];
    }
}

export default new Storage();