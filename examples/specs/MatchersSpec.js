describe('matchers', () => {
    describe('toHaveLength', () => {
        it('should pass if array has given length', () => {
            expect([1,2,3]).toHaveLength(3);
        });

        it('should pass if string has given length', () => {
            expect('123').toHaveLength(3);
        });
    });

    describe('toHaveClass', () => {
        beforeEach(function() {this.n = RH.render(<div className="testing"></div>)});
        it('should pass if a jquery element has the given class', function() {
            expect(this.n).toHaveClass('testing');
        });

        it('should pass if a dom element has the given class', function() {
            expect(this.n.get(0)).toHaveClass('testing');
        });
    });

    describe('toHaveFieldWithLabel', () => {
        it('should return true if it finds a field with  label', () => {
            var n = RH.render(
                <div>
                    <div className="input-form__group">
                        <label>fieldLabel</label>
                        <input name="fieldName"/>
                    </div>
                </div>
            );
            expect(n).toHaveFieldWithLabel({name:'fieldName', label:'fieldLabel'});
        });
    });

    describe('toContain', () => {
        it('works with a dom element', () => {
            var n = RH.render(
                <div>
                    <something/>
                </div>
            );
            expect(n.get(0)).toContain('something');
        });

        it('works with a jquery object', () => {
            var n = RH.render(
                <div>
                    <something/>
                </div>
            );
            expect(n).toContain('something');
        });
    });

    describe('toContainText', () => {
        beforeEach(function() {
            this.n = RH.render(<div><span>testing123</span></div>);
        });
        it('passes if descendent dom element contains text', function() {
            expect(this.n).toContainText('ting');
        });
    });

});

