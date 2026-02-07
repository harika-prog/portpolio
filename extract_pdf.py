import re
import zlib

def extract_pdf_text(file_path):
    try:
        with open(file_path, 'rb') as f:
            content = f.read()

        # Regex to find streams
        # PDF streams are usually between "stream\r\n" and "\r\nendstream"
        # We'll look for the markers and capture everything in between
        streams = re.findall(b'stream[\r\n\s]+(.*?)[\r\n\s]+endstream', content, re.DOTALL)
        
        extracted_text = []

        print(f"Found {len(streams)} streams.")

        for i, stream_data in enumerate(streams):
            try:
                # Try to decompress
                decompressed = zlib.decompress(stream_data)
                # Try to decode as text
                text = decompressed.decode('utf-8', errors='ignore')
                # Filter for mostly alphanumeric content to avoid garbage
                # Simple heuristic: keep if it looks like significant text
                if len(text) > 10: 
                    # Clean up PDF formatting (TJ operators, parens etc)
                    # This is very rough parsing
                    clean_text = re.sub(r'\((.*?)\)Tj', r'\1', text) # Simple text extraction
                    clean_text = re.sub(r'\[(.*?)\]TJ', r'\1', clean_text) # Spaced text
                    clean_text = re.sub(r'[^a-zA-Z0-9\s\.,;:!@#-]', '', clean_text)
                    extracted_text.append(clean_text)
            except Exception as e:
                # Not a zlib stream or other error, ignore
                pass

        full_text = '\n'.join(extracted_text)
        print("--- EXTRACTED TEXT START ---")
        print(full_text)
        print("--- EXTRACTED TEXT END ---")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    extract_pdf_text('resume.pdf')
