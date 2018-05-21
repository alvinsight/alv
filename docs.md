## Modules

<dl>
<dt><a href="#module_math">math</a></dt>
<dd></dd>
<dt><a href="#module_random">random</a></dt>
<dd></dd>
<dt><a href="#module_save">save</a></dt>
<dd></dd>
<dt><a href="#module_strings">strings</a></dt>
<dd></dd>
<dt><a href="#module_EventDispatcher">EventDispatcher</a></dt>
<dd></dd>
</dl>

<a name="module_math"></a>

## math

* [math](#module_math)
    * [.clamp(value, min, max)](#module_math.clamp) ⇒ <code>number</code>
    * [.lerp(start, stop, amt)](#module_math.lerp) ⇒ <code>number</code>
    * [.map(n, inputMin, inputMax, outputMin, outputMax)](#module_math.map) ⇒ <code>number</code>


* * *

<a name="module_math.clamp"></a>

### math.clamp(value, min, max) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#module_math)  

| Param | Type |
| --- | --- |
| value | <code>number</code> | 
| min | <code>number</code> | 
| max | <code>number</code> | 


* * *

<a name="module_math.lerp"></a>

### math.lerp(start, stop, amt) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#module_math)  

| Param | Type |
| --- | --- |
| start | <code>number</code> | 
| stop | <code>number</code> | 
| amt | <code>number</code> | 


* * *

<a name="module_math.map"></a>

### math.map(n, inputMin, inputMax, outputMin, outputMax) ⇒ <code>number</code>
**Kind**: static method of [<code>math</code>](#module_math)  

| Param | Type |
| --- | --- |
| n | <code>number</code> | 
| inputMin | <code>number</code> | 
| inputMax | <code>number</code> | 
| outputMin | <code>number</code> | 
| outputMax | <code>number</code> | 


* * *

<a name="module_random"></a>

## random

* [random](#module_random)
    * [.random(min, max)](#module_random.random) ⇒ <code>number</code>
    * [.randomInt(min, max)](#module_random.randomInt) ⇒ <code>number</code>
    * [.pick(array)](#module_random.pick) ⇒ <code>any</code>
    * [.pointInSphere(radius)](#module_random.pointInSphere) ⇒ <code>Array.&lt;number&gt;</code>
    * [.pointAroundSphere(radius)](#module_random.pointAroundSphere) ⇒ <code>Array.&lt;number&gt;</code>


* * *

<a name="module_random.random"></a>

### random.random(min, max) ⇒ <code>number</code>
**Kind**: static method of [<code>random</code>](#module_random)  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 


* * *

<a name="module_random.randomInt"></a>

### random.randomInt(min, max) ⇒ <code>number</code>
**Kind**: static method of [<code>random</code>](#module_random)  

| Param | Type |
| --- | --- |
| min | <code>number</code> | 
| max | <code>number</code> | 


* * *

<a name="module_random.pick"></a>

### random.pick(array) ⇒ <code>any</code>
**Kind**: static method of [<code>random</code>](#module_random)  

| Param | Type |
| --- | --- |
| array | <code>Array.&lt;any&gt;</code> | 


* * *

<a name="module_random.pointInSphere"></a>

### random.pointInSphere(radius) ⇒ <code>Array.&lt;number&gt;</code>
It looks like the original implementation is from here: https://stackoverflow.com/a/5408843

**Kind**: static method of [<code>random</code>](#module_random)  

| Param | Type |
| --- | --- |
| radius | <code>number</code> | 


* * *

<a name="module_random.pointAroundSphere"></a>

### random.pointAroundSphere(radius) ⇒ <code>Array.&lt;number&gt;</code>
**Kind**: static method of [<code>random</code>](#module_random)  

| Param | Type |
| --- | --- |
| radius | <code>number</code> | 


* * *

<a name="module_save"></a>

## save

* [save](#module_save)
    * _static_
        * [.saveString(str, [filename])](#module_save.saveString)
        * [.saveBinary(data, [filename])](#module_save.saveBinary)
        * [.saveCanvas(canvas, [filename])](#module_save.saveCanvas) ⇒ <code>DOMString</code>
    * _inner_
        * [~saveBlob(blob, filename)](#module_save..saveBlob)


* * *

<a name="module_save.saveString"></a>

### save.saveString(str, [filename])
Saves a string in a [.txt] file

**Kind**: static method of [<code>save</code>](#module_save)  

| Param | Type | Default |
| --- | --- | --- |
| str | <code>String</code> |  | 
| [filename] | <code>String</code> | <code>&#x27;file.txt&#x27;</code> | 


* * *

<a name="module_save.saveBinary"></a>

### save.saveBinary(data, [filename])
saves a binary data in a [.bin] file

**Kind**: static method of [<code>save</code>](#module_save)  

| Param | Type | Default |
| --- | --- | --- |
| data | <code>any</code> |  | 
| [filename] | <code>String</code> | <code>&#x27;file.bin&#x27;</code> | 


* * *

<a name="module_save.saveCanvas"></a>

### save.saveCanvas(canvas, [filename]) ⇒ <code>DOMString</code>
Turns a canvas element into a png file and saves it

**Kind**: static method of [<code>save</code>](#module_save)  
**Returns**: <code>DOMString</code> - A data URL representation of the canvas  

| Param | Type | Default |
| --- | --- | --- |
| canvas | <code>HTMLCanvasElement</code> |  | 
| [filename] | <code>String</code> | <code>&#x27;canvas.png&#x27;</code> | 


* * *

<a name="module_save..saveBlob"></a>

### save~saveBlob(blob, filename)
Saves a Blob as a binary file

**Kind**: inner method of [<code>save</code>](#module_save)  

| Param | Type | Default |
| --- | --- | --- |
| blob | <code>Blob</code> |  | 
| filename | <code>String</code> | <code>blob.bin</code> | 


* * *

<a name="module_strings"></a>

## strings

* [strings](#module_strings)
    * [.capitalize(str)](#module_strings.capitalize) ⇒ <code>string</code>
    * [.slugify(str)](#module_strings.slugify) ⇒ <code>string</code>
    * [.addLeadingZeros(number, amount)](#module_strings.addLeadingZeros) ⇒ <code>string</code>
    * [.queryStringParameters(url)](#module_strings.queryStringParameters) ⇒ <code>Map</code>


* * *

<a name="module_strings.capitalize"></a>

### strings.capitalize(str) ⇒ <code>string</code>
Capitalises the first word of a string, so "can't stop" becomes "Can't stop"

**Kind**: static method of [<code>strings</code>](#module_strings)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the target string |


* * *

<a name="module_strings.slugify"></a>

### strings.slugify(str) ⇒ <code>string</code>
Turns a string into a normalised format that can be used for slugs and ids
so "I'm Yours" becomes "i-m-yours"

**Kind**: static method of [<code>strings</code>](#module_strings)  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | the target string |


* * *

<a name="module_strings.addLeadingZeros"></a>

### strings.addLeadingZeros(number, amount) ⇒ <code>string</code>
Converts a number to a string then adds leading zeros to it.

**Kind**: static method of [<code>strings</code>](#module_strings)  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | the number to add zeros to |
| amount | <code>number</code> | the maximum number of leading zeros, so 2 will change 1 to "001" |


* * *

<a name="module_strings.queryStringParameters"></a>

### strings.queryStringParameters(url) ⇒ <code>Map</code>
Extracts the query string parameters from a URL into a Map

**Kind**: static method of [<code>strings</code>](#module_strings)  
**Returns**: <code>Map</code> - the parameters and their values  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | the URL to extract the query string from |


* * *

<a name="module_EventDispatcher"></a>

## EventDispatcher

* * *

