import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-succsessfully-sent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './succsessfully-sent.component.html',
  styleUrl: './succsessfully-sent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.is-closing]': 'closing',
  },
})
export class SuccsessfullySentComponent {

  @Input() headline = 'E-Mail erfolgreich versendet';

  @Input() subline = 'Vielen Dank! Ich melde mich in Kürze bei dir.';

  @Input() closing = false;

  @Output() closed = new EventEmitter<void>();

  closeOverlay(): void {
    this.closed.emit();
  }
}
