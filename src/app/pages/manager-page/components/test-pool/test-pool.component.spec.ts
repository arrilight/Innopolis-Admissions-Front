import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPoolComponent } from './test-pool.component';

describe('TestPool', () => {
    let component: TestPoolComponent;
    let fixture: ComponentFixture<TestPoolComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestPoolComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestPoolComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
