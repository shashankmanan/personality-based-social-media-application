import requests

def main():
    # Example GET request
    response = requests.post('http://127.0.0.1:5000',{
    "EXT1": 4,
    "EXT2": 1,
    "EXT3": 5,
    "EXT4": 2,
    "EXT5": 5,
    "EXT6": 1,
    "EXT7": 5,
  "EXT8": 2,
  "EXT9": 4,
  "EXT10": 1,
  "EST1": 1,
  "EST2": 4,
  "EST3": 4,
  "EST4": 2,
  "EST5": 2,
  "EST6": 2,
  "EST7": 2,
  "EST8": 2,
  "EST9": 3,
  "EST10": 2,
  "AGR1": 2,
  "AGR2": 5,
  "AGR3": 2,
  "AGR4": 4,
  "AGR5": 2,
  "AGR6": 5,
  "AGR7": 3,
  "AGR8": 4,
  "AGR9": 3,
  "AGR10": 4,
  "CSN1": 3,
  "CSN2": 4,
  "CSN3": 2,
  "CSN4": 4,
  "CSN5": 4,
  "CSN6": 2,
  "CSN7": 4,
  "CSN8": 1,
  "CSN9": 5,
  "CSN10": 3,
  "OPN1": 4,
  "OPN2": 1,
  "OPN3": 4,
  "OPN4": 1,
  "OPN5": 5,
  "OPN6": 3,
  "OPN7": 4,
  "OPN8": 5,
  "OPN9": 3,
  "OPN10": 4
})
    
    # Example POST request with JSON data
    # payload = {'key1': 'value1', 'key2': 'value2'}
    # response = requests.post('https://jsonplaceholder.typicode.com/posts', json=payload)
    
    # Print the status code and response content
    if response.status_code == 200:
        print('Response Status Code:', response.status_code)
        print('Response Body:')
        print(response.json())  # Assuming response is JSON
    else:
        print('Failed to fetch data:', response.status_code)
        print(response.data)

if __name__ == '__main__':
    main()
