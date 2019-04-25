import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffInterviewsComponent } from './staff-interviews.component';

describe('StaffInterviewsComponent', () => {
    let component: StaffInterviewsComponent;
    let fixture: ComponentFixture<StaffInterviewsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [StaffInterviewsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StaffInterviewsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
