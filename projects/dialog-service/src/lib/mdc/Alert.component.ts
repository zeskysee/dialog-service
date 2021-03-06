import { ChangeDetectionStrategy, Component, Inject } from '@angular/core'
import { MDC_DIALOG_DATA } from '@angular-mdc/web'

// @dynamic
@Component({
  templateUrl: './Alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent {
  constructor (@Inject(MDC_DIALOG_DATA) public data: {
    title: string
    acceptButton: string
    content?: string
  }) {
  }
}
