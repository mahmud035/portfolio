import { X } from 'lucide-react';
import { profile } from '../../data/profile';
import { useDelayedModal } from '../../hooks/useDelayedModal';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { LinkedinIcon } from '../ui/icons';

/**
 * App-wide "Want to talk?" prompt. Appears once per session (see
 * useDelayedModal) and routes to LinkedIn or email — never a form.
 */
export function TalkModal() {
  const { isOpen, close } = useDelayedModal();

  return (
    <Modal isOpen={isOpen} onClose={close} labelledById="talk-modal-title">
      <button
        type="button"
        onClick={close}
        aria-label="Close"
        className="text-muted hover:bg-surface-2 hover:text-fg absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-lg transition-colors"
      >
        <X className="size-4" aria-hidden="true" />
      </button>

      <h2
        id="talk-modal-title"
        className="font-display text-fg text-xl font-bold tracking-tight"
      >
        Want to talk?
      </h2>
      <p className="text-muted mt-2">
        Thanks for stopping by — happy to connect.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <Button
          href={profile.linkedinUrl}
          external
          variant="primary"
          onClick={close}
        >
          <LinkedinIcon className="size-4" aria-hidden="true" />
          Message me on LinkedIn
        </Button>
        <Button
          href={`mailto:${profile.email}`}
          variant="secondary"
          onClick={close}
        >
          Or email me
        </Button>
        <button
          type="button"
          onClick={close}
          className="text-muted hover:text-fg mt-1 text-sm font-medium transition-colors"
        >
          Maybe later
        </button>
      </div>
    </Modal>
  );
}
