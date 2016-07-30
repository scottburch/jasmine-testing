describe('matchers', () => {
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
    })
});

