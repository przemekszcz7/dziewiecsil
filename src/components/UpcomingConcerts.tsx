import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Music, RefreshCw, ExternalLink, AlertCircle } from 'lucide-react';

interface CalendarEvent {
  id: string;
  summary?: string;
  location?: string;
  description?: string;
  htmlLink?: string;
  start: {
    dateTime?: string;
    date?: string;
  };
  end?: {
    dateTime?: string;
    date?: string;
  };
}

export default function UpcomingConcerts() {
  const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY || localStorage.getItem('dziewiecsil_gcal_api_key') || '';
  const calendarId = import.meta.env.VITE_GOOGLE_CALENDAR_ID || localStorage.getItem('dziewiecsil_gcal_id') || '';

  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCalendarEvents = async () => {
    if (!apiKey.trim() || !calendarId.trim()) {
      setLoading(false);
      setError(null);
      setEvents([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const now = new Date().toISOString();
      const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
        calendarId.trim()
      )}/events?key=${apiKey.trim()}&timeMin=${now}&singleEvents=true&orderBy=startTime`;

      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData?.error?.message || `Błąd serwera Google API (${response.status})`);
      }

      const data = await response.json();
      
      if (data.items) {
        setEvents(data.items);
      } else {
        setEvents([]);
      }
    } catch (err: any) {
      console.error('Błąd pobierania wydarzeń z Google Calendar API:', err);
      setError(err.message || 'Nie udało się załadować koncertów z Kalendarza Google.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCalendarEvents();
  }, [apiKey, calendarId]);

  return (
    <section id="koncerty" className="py-24 px-4 bg-linen border-b border-cream-border/60 relative overflow-hidden">
      <div className="max-w-[1080px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-sans font-semibold text-[11px] tracking-[0.25em] text-wood-warm uppercase flex items-center justify-center gap-2">
            <Music className="w-3.5 h-3.5" /> NA ŻYWO I WYSTĘPY
          </span>
          <h2 className="font-serif font-bold text-wood-dark text-3xl sm:text-4xl md:text-5xl mt-2 leading-tight">
            Nadchodzące Koncerty
          </h2>
          <div className="ornament">
            <span className="orn-line"></span>
            <span className="orn-mark">❦</span>
            <span className="orn-line"></span>
          </div>
          <p className="text-sm sm:text-base text-wood-mid max-w-2xl mx-auto font-sans leading-relaxed">
            Sprawdź, gdzie i kiedy możesz usłyszeć Kapelę Dziewięćsił na żywo. Wydarzenia są pobierane bezpośrednio z naszego oficjalnego Kalendarza Google.
          </p>
        </div>

        {/* Main Events Container */}
        <div id="koncerty-container">
          {loading ? (
            <div className="py-16 text-center bg-paper border border-cream-border rounded-[2px]">
              <div className="inline-block animate-spin text-wood-warm mb-3">
                <RefreshCw className="w-8 h-8" />
              </div>
              <p className="font-serif text-wood-dark text-lg font-medium">Ładowanie nadchodzących koncertów...</p>
            </div>
          ) : error ? (
            <div className="p-8 text-center bg-paper border border-amber-300 rounded-[2px] shadow-2xs">
              <AlertCircle className="w-10 h-10 text-amber-600 mx-auto mb-3" />
              <h3 className="font-serif font-bold text-wood-dark text-xl mb-1">Błąd pobierania wydarzeń</h3>
              <p className="text-sm text-wood-mid font-sans max-w-lg mx-auto mb-4">{error}</p>
              <button
                onClick={fetchCalendarEvents}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-sans font-semibold bg-wood-warm text-white rounded-[2px] hover:bg-wood-light transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Spróbuj ponownie
              </button>
            </div>
          ) : events.length === 0 ? (
            <div className="py-16 text-center bg-paper border border-cream-border rounded-[2px]">
              <CalendarIcon className="w-12 h-12 text-wood-warm/50 mx-auto mb-3" />
              <h3 className="font-serif font-bold text-wood-dark text-2xl">Brak nadchodzących koncertów</h3>
              <p className="text-sm text-wood-mid font-sans mt-2 max-w-md mx-auto">
                W tym momencie nie mamy zaplanowanych publicznych występów w kalendarzu. Zapraszamy do kontaktu w sprawie rezerwacji terminów!
              </p>
            </div>
          ) : (
            /* Render Events List */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => {
                const startStr = event.start.dateTime || event.start.date || '';
                const dateObj = startStr ? new Date(startStr) : new Date();

                const formattedDate = dateObj.toLocaleDateString('pl-PL', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                });

                const formattedTime = event.start.dateTime
                  ? dateObj.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' })
                  : null;

                const title = event.summary || 'Koncert Kapeli Dziewięćsił';

                return (
                  <div
                    key={event.id}
                    className="koncert-card bg-paper p-6 border border-cream-border wood-border rounded-[2px] shadow-xs flex flex-col justify-between hover:border-wood-warm/50 transition-all duration-300 group"
                  >
                    <div>
                      {/* Date Badge */}
                      <div className="flex items-center gap-2 text-xs font-sans font-bold text-wood-warm uppercase tracking-wider mb-3 bg-linen px-3 py-1.5 border border-cream-border rounded-[2px] w-fit">
                        <CalendarIcon className="w-3.5 h-3.5" />
                        <span>{formattedDate}</span>
                        {formattedTime && (
                          <>
                            <span className="text-cream-border">·</span>
                            <span className="flex items-center gap-1 text-wood-dark">
                              <Clock className="w-3 h-3 text-wood-mid" /> {formattedTime}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="font-serif font-bold text-wood-dark text-xl leading-snug group-hover:text-wood-warm transition-colors mb-2">
                        {title}
                      </h3>

                      {/* Location */}
                      {event.location && (
                        <p className="text-xs font-sans font-medium text-wood-mid flex items-start gap-1.5 mb-3">
                          <MapPin className="w-3.5 h-3.5 text-wood-warm shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </p>
                      )}

                      {/* Description */}
                      {event.description && (
                        <p className="text-xs font-sans text-wood-dark/80 leading-relaxed border-t border-cream-border/60 pt-3 mt-2 line-clamp-3">
                          {event.description}
                        </p>
                      )}
                    </div>

                    {/* Footer / Calendar Link */}
                    {event.htmlLink && (
                      <div className="pt-4 mt-4 border-t border-cream-border/60 flex justify-end">
                        <a
                          href={event.htmlLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-sans font-semibold text-wood-warm hover:text-wood-dark transition-colors"
                        >
                          Zobacz w Kalendarzu Google <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
