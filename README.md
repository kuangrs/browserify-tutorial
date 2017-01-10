# browserify-tutorial

### 命令行
~~~sh
npm install -g browserify
browserify entry.js -o bundle.js
~~~

```html
<script src="bundle.js"></script>
```

### Gulp
```javascript
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify('./js/app.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));
});
```

### with transform
```javascript
gulp.task('default',['clear'], function() {
    return browserify('./js/app.js')
        .transform(
            ['babelify', {'presets': ['es2015']}]
        )
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/'));
});
```

`TODO`

### 参考链接
- [browserify-handbook](https://github.com/substack/browserify-handbook)
- [Gulp + Browserify: The Everything Post](https://www.viget.com/articles/gulp-browserify-starter-faq)
