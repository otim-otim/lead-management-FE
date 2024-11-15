
import { useEffect, useState } from 'react';
import echo from '../realTimeListener';  
import { FollowUp } from '../types';

//todo: set this up properly for private channels

export const useRealTimeFollowUpStatus = (onStatusUpdate: (followUp: FollowUp) => void) => {
  useEffect(() => {
    // Listen for the follow-up status update event
    const channel = echo.channel('followups-status-channel');

    channel.listen('.followup-status-updated', (event: { followUp: FollowUp }) => {
      // Call the provided callback when a status update is received
      onStatusUpdate(event.followUp);
    });

    // Cleanup: stop listening when the component unmounts
    return () => {
      channel.stopListening('.followup-status-updated');
    };
  }, [onStatusUpdate]);
};
