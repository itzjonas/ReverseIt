export default str =>
    str
        .split(' ')
        .map(word =>
            word
                .split(/(\w+)/)
                .filter(s => s.trim() !== '')
                .map(word =>
                    word
                        .split('')
                        .reverse()
                        .join(''),
                )
                .join(''),
        )
        .join(' ');
