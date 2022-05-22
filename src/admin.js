import "bootstrap/scss/bootstrap.scss";
import '@/css/admin.scss'

import {Collapse} from 'bootstrap/js/src/collapse'
import {Dropdown} from 'bootstrap/js/src/dropdown'
import '@/js/utils'

console.log('admin init')

const f = async () => {
    let response = await fetch('/api')
    if (response.ok) {
        let json = await response.json()
        document.querySelector('h1').innerHTML = json.title
    } else {
        console.log('Ошибка HTTP: ' + response.status);
    }
}

f()